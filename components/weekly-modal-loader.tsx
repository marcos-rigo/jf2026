"use client"

import dynamic from "next/dynamic"

const WeeklyModal = dynamic(() => import("@/components/weekly-modal"), {
  ssr: false,
})

export default function WeeklyModalLoader() {
  return <WeeklyModal />
}
