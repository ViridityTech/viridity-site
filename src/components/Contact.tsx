import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { EMAILJS_CONFIG } from '@/lib/emailjs';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Form validation schema
const contactFormSchema = z.object({
  from_name: z.string().min(2, 'Name must be at least 2 characters'),
  from_email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      from_name: '',
      from_email: '',
      subject: '',
      message: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
          duration: 5000,
        });
        form.reset();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at contact@viridity.com",
        variant: "destructive",
        duration: 5000,
      });
    }
  };
  
  const contactInfo = [
    {
      icon: <PhoneCall className="h-5 w-5" />,
      title: "Phone",
      details: "+1 (513) 381-5555",
      link: "tel:+15133815555"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "contact@viridity.com",
      link: "mailto:contact@viridity.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      details: "708 Walnut St, Cincinnati, OH 45202",
      link: "https://maps.app.goo.gl/fNP88Nns2wo4fGx2A"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 bg-viridity-100 text-viridity-700 rounded-full text-sm font-medium">
              Ready to Start
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Talk to the Founders Directly 
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a vision or project in mind? You're in the perfect place. We love bringing bold ideas to life and fueling business growth. Let's make something amazing - starting today.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  className="flex items-start p-4 rounded-xl glass transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-viridity-100 text-viridity-600 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/matt-mckeown-orchard/"
                  className="w-10 h-10 rounded-full bg-viridity-100 text-viridity-600 flex items-center justify-center transition-all duration-300 hover:bg-viridity-500 hover:text-white"
                  aria-label="Follow us on linkedin"
                >
                  <span className="sr-only">Follow us on linkedin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Start the Conversation</h3>
            
            <Form {...form}>
              <form 
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="from_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field}
                            className="focus:ring-2 focus:ring-viridity-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="from_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@example.com" 
                            {...field}
                            className="focus:ring-2 focus:ring-viridity-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="How can we help?" 
                          {...field}
                          className="focus:ring-2 focus:ring-viridity-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>We read and respond to every lead.</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder="Tell us about your project..." 
                          {...field}
                          className="focus:ring-2 focus:ring-viridity-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Hidden field for timestamp */}
                <input 
                  type="hidden" 
                  name="submission_date" 
                  value={new Date().toLocaleString()} 
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-viridity-500 hover:bg-viridity-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Talk to the Founders
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
