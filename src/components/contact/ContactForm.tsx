import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset();
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-secondary/20 border border-white/5 rounded-lg p-6 card-hover">
      <h2 className="text-xl font-bold mb-4 font-heading">Get in Touch</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Have a question or want to work together? Drop me a message!
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="your.email@example.com" 
                    {...field} 
                    className="bg-white/5 border-white/10 focus:border-primary/50"
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Your message here..." 
                    {...field} 
                    className="bg-white/5 border-white/10 focus:border-primary/50 min-h-32 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting || isSuccess}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4 animate-pulse" /> Sending...
              </span>
            ) : isSuccess ? (
              <span className="flex items-center">
                <Check className="mr-2 h-4 w-4" /> Message Sent!
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;