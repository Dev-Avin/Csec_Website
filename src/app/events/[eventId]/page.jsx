"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import { Inria_Serif } from "next/font/google";
import events from '../../../../past_events.json'
import { Button } from '../../../components/ui/button'
import faqs from "../../../../faq.json"
import contact from '../../../../contact.json'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../../components/ui/accordion"
import { PhoneCallIcon } from 'lucide-react';

const inria = Inria_Serif({
    display: 'swap',
    subsets: ['latin'],
    weight: ["300", "400", "700"]
})
const page = () => {
    const params = useParams()
    const { eventId: eventName } = params
    const event = events.find(event => event.event === eventName)
    return (
        <>
            <div className='flex mx-auto max-h-[500px] px-10 mt-8 mb-4'>
                <img className='h-300 mx-100 rounded-xl border border-b-4 shadow-md opacity-50' src={`${event.image}`} />
            </div>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex gap-2 justify-center items-center'>
                    <p className='md:text-4xl text-xl font-bold '>
                        {event.event_type}
                    </p>
                    <div className="bg-gradient-to-br from-gray-300 to-slate-700 w-2 h-6" />

                    <p className='md:text-4xl text-xl font-bold'>
                        {event.long_date}
                    </p>
                </div>
                <Button className="w-60 rounded-full text-lg font-semibold" variant={"outline"}>
                    Register
                </Button>
            </div>
            <div className='mx-10  flex flex-col gap-2'>
                <h1 className='md:text-4xl text-xl font-semibold'>
                    {event.event}
                </h1>
                <p className={'md:text-lg text-md' + (inria.className)}>
                    {event.long_desc}
                </p>
            </div>
            <div className='flex flex-col mx-10 mt-8'>
                <h1 className='md:text-4xl text-xl font-semibold'>
                    FAQs
                </h1>
                {
                    event.event === "Hackathon" ? faqs.hackathon.map((faq, index) => (
                        <Accordion key={faq.id} type="single" collapsible className="w-full">
                            <AccordionItem value={faq.id}>
                                <AccordionTrigger className="md:text-lg text-md">{faq.faq_ques}</AccordionTrigger>
                                <AccordionContent className="md:text-lg text-md">
                                    {faq.faq_ans}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )) : event.event === "Workshop" ? faqs.workshop.map((faq, index) => (
                        <Accordion key={faq.id} type="single" collapsible className="w-full">
                            <AccordionItem value={faq.id}>
                                <AccordionTrigger className="md:text-lg text-md">{faq.faq_ques}</AccordionTrigger>
                                <AccordionContent className="md:text-lg text-md">
                                    {faq.faq_ans}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )) : event.event === "Coding" ? faqs.coding_contest.map((faq, index) => (
                        <Accordion key={faq.id} type="single" collapsible className="w-full">
                            <AccordionItem value={faq.id}>
                                <AccordionTrigger className="md:text-lg text-md">{faq.faq_ques}</AccordionTrigger>
                                <AccordionContent className="md:text-lg text-md">
                                    {faq.faq_ans}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )) : ""

                }

            </div>
            <div className='flex flex-col gap-5 mx-10 mt-8'>
                <h1 className='md:text-4xl text-xl font-semibold'>
                    Contacts
                </h1>
                <div className='flex flex-col gap-4'>
                    {
                        contact.map((contact, index) => (
                            <div key={index} className='flex gap-2 items-center'>
                                <PhoneCallIcon className='w-5 h-5' />
                                <p className='md:text-lg text-md'>{contact.Phone}</p>
                                <p className='md:text-lg text-md'>{contact.name}</p>

                            </div>
                        ))
                    }
                    <p></p>
                </div>
            </div>

        </>
    )
}

export default page
