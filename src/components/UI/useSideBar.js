import { ref, computed, inject, provide, onMounted, onUnmounted } from 'vue'

const SidebarSymbol = Symbol('SidebarContext')

export function createSidebarContext(defaultOpen = true) {
  const isMobile = ref(false)
  const openMobile = ref(false)
  const open = ref(defaultOpen)

  // Leer estado inicial desde la cookie si existe
  onMounted(() => {
    const match = document.cookie.match(new RegExp('(^| )sidebar_state=([^;]+)'))
    if (match) {
      open.value = match[2] === 'true'
    }
    
    // Comprobación básica de responsive nativo
    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    onUnmounted(() => window.removeEventListener('resize', checkMobile))
  })

  const state = computed(() => open.value ? 'expanded' : 'collapsed')

  const setOpen = (value) => {
    open.value = value
    document.cookie = `sidebar_state=${value}; path=/; max-age=${60 * 60 * 24 * 7}`
  }

  const toggleSidebar = () => {
    if (isMobile.value) {
      openMobile.value = !openMobile.value
    } else {
      setOpen(!open.value)
    }
  }

  // Atajo de teclado: Ctrl + B o Cmd + B
  const handleKeyDown = (event) => {
    if (event.key === 'b' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      toggleSidebar()
    }
  }

  onMounted(() => window.addEventListener('keydown', handleKeyDown))
  onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))

  const context = {
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    toggleSidebar
  }

  provide(SidebarSymbol, context)
  return context
}

export function useSidebar() {
  const context = inject(SidebarSymbol)
  if (!context) {
    throw new Error('useSidebar debe ser usado dentro de un componente <SidebarProvider />')
  }
  return context
}