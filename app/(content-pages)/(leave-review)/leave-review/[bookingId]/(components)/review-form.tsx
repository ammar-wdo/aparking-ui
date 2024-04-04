'use client'

import { useState } from 'react'
import ReactStars from 'react-stars'
import { useReview } from '../review.hook'
import { Booking } from '@/schemas'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Loader } from 'lucide-react'

type Props = {
    booking:Booking & {service :{entityId:string}}
}

const ReviewForm = ({booking}: Props) => {

   
 const {form,onSubmit} = useReview({booking})


const isLoading = form.formState.isSubmitting
  return (
    <div className='max-w-[500px] w-full mx-auto  flex flex-col gap-4 p-3 '>
        <h3 className='text-site text-3xl font-bold text-center'>Beoordeel je recente ervaring</h3>
        {/* <p className='text-neutral-500 text-lg text-center'>Geef een ster</p> */}

    
       <ReactStars 
        onChange={(value)=>form.setValue('rate',value)}
        className='mx-auto'
        value={form.watch('rate')}
        
        count={5} 
        size={24} 
        color2={'#FEBA02'} /> 
      

<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="reviewContent"
          render={({ field }) => (
            <FormItem>
             
              <FormControl>
                <Textarea placeholder="Deel je ervaring" className='resize-none w-full bg-gray-100 border-none outline-none min-h-[200px]'  {...field} />
              </FormControl>
        
            
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="visibility"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Beoordeling achterlaten als:</FormLabel>
              <FormControl className=''>
               
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex justify-between "
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="FULLNAME" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Voornaam
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="FIRSTNAME" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Achternaam
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="ANOUNYMOS" />
                    </FormControl>
                    <FormLabel className="font-normal">Anoniem</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
        
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" variant={'siteTwo'} className='w-full '>Verstuur {isLoading && <Loader className='ml-3 h-4 w-4 animate-spin' />}</Button>
      </form>
    </Form>
       

    </div>
  )
}

export default ReviewForm