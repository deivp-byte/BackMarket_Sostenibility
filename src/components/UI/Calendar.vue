<script setup>
import { 
  CalendarRoot, 
  CalendarHeader, 
  CalendarHeading, 
  CalendarGrid, 
  CalendarGridHead, 
  CalendarHeadCell, 
  CalendarGridBody, 
  CalendarRow, 
  CalendarCell, 
  CalendarCellTrigger,
  CalendarPrev,
  CalendarNext
} from 'radix-vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

// Definimos las propiedades básicas que aceptará nuestro calendario
defineProps({
  placeholder: Object,
  multiple: Boolean,
  disabled: Boolean
})
</script>

<template>
  <CalendarRoot
    v-slot="{ dates, weekDays }"
    data-slot="calendar"
    class="p-3 w-fit border rounded-md bg-white shadow-sm"
    v-bind="$attrs"
  >
    <CalendarHeader class="flex justify-center pt-1 relative items-center w-full mb-4">
      <CalendarPrev 
        class="absolute left-1 inline-flex items-center justify-center rounded-md border bg-transparent p-0 size-7 opacity-50 hover:opacity-100 transition-opacity"
      >
        <ChevronLeft class="size-4" />
      </CalendarPrev>
      
      <CalendarHeading class="text-sm font-medium" />
      
      <CalendarNext 
        class="absolute right-1 inline-flex items-center justify-center rounded-md border bg-transparent p-0 size-7 opacity-50 hover:opacity-100 transition-opacity"
      >
        <ChevronRight class="size-4" />
      </CalendarNext>
    </CalendarHeader>

    <div class="flex flex-col sm:flex-row gap-2">
      <CalendarGrid class="w-full border-collapse space-y-1">
        
        <CalendarGridHead>
          <CalendarRow class="flex w-full">
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] text-center"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarRow>
        </CalendarGridHead>

        <CalendarGridBody>
          <CalendarRow
            v-for="(weekDates, index) in dates"
            :key="index"
            class="flex w-full mt-2"
          >
            <CalendarCell
              v-for="date in weekDates"
              :key="date.toString()"
              :date="date"
              class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 rounded-md [&:has([data-selected])]:bg-accent"
            >
              <CalendarCellTrigger
                :date="date"
                class="size-8 p-0 font-normal inline-flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[today]:bg-accent data-[today]:text-accent-foreground data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 data-[disabled]:opacity-50"
              >
                {{ date.day }}
              </CalendarCellTrigger>
            </CalendarCell>
          </CalendarRow>
        </CalendarGridBody>

      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>