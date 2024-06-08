"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
     Form,
     FormControl,
     FormField,
     FormItem,
     FormLabel,
     FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
     const form = useForm<z.infer<typeof LoginSchema>>({
          resolver: zodResolver(LoginSchema),
          defaultValues: {
               email: "",
               password: "",
          },
     });


     return (
          <CardWrapper
               headerLabel="Welcome Back!"
               backButtonLabel="Don't have an account?"
               backButtonHref="/auth/register"
               showSocial
          >
               <Form {...form}>
                    <form
                         onSubmit={form.handleSubmit(() => { })}
                         className="space-y-6"
                    >
                         <div className="space-y-4">
                              <FormField
                                   control={form.control}
                                   name='email'
                                   render={({ field }) => (
                                        <FormItem>
                                             <FormLabel>Email</FormLabel>
                                             <FormControl>
                                                  <Input
                                                       {...field}
                                                       placeholder="jhon.doe@exemple.com"
                                                       type="email"
                                                  />
                                             </FormControl>
                                             <FormMessage />
                                        </FormItem>
                                   )}
                              />
                              <FormField
                                   control={form.control}
                                   name='password'
                                   render={({ field }) => (
                                        <FormItem>
                                             <FormLabel>Password</FormLabel>
                                             <FormControl>
                                                  <Input
                                                       {...field}
                                                       placeholder="*****"
                                                       type="password"
                                                  />
                                             </FormControl>
                                             <FormMessage />
                                        </FormItem>
                                   )}
                              />
                         </div>
                         <Button
                              type="submit"
                              className="w-full rounded hover:bg-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:text-secondary-foreground"
                         >
                              Login
                         </Button>
                    </form>
               </Form>
          </CardWrapper>
     );
};

