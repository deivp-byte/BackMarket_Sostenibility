import { ref, onMounted, onUnmounted } from 'vue'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const isMobile = ref(false)

  onMounted(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = () => {
      isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
    }

    // Escuchar el cambio de pantalla de forma eficiente
    mql.addEventListener('change', onChange)
    onChange() // Evaluar el tamaño inmediatamente al cargar

    // Limpiar el escucha cuando el componente se destruye para evitar fugas de memoria
    onUnmounted(() => mql.removeEventListener('change', onChange))
  })

  return isMobile
}