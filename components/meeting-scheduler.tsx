"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function MeetingScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [company, setCompany] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Meeting Scheduled",
      description: `Your meeting is scheduled for ${date?.toDateString()} at ${time}.`,
    })
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Meeting</CardTitle>
        <CardDescription>Choose a date and time that works for you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="date">Select a Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Label htmlFor="time">Select a Time</Label>
                <Select onValueChange={setTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 9 }, (_, i) => i + 9).map((hour) => (
                      <SelectItem key={hour} value={`${hour}:00`}>{`${hour}:00`}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Schedule Meeting</Button>
      </CardFooter>
    </Card>
  )
}

