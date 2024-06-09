"use client";

import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
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
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/actions/register";

export const RegisterForm = () => {
     const [error, setError] = useState<string | undefined>("");
     const [success, setSuccess] = useState<string | undefined>("");
     const [isPending, startTransition] = useTransition();
     const form = useForm<z.infer<typeof RegisterSchema>>({
          resolver: zodResolver(RegisterSchema),
          defaultValues: {
               email: "",
               password: "",
          },
     });

     const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
          //console.log(values); Check the value ✅
          setError("");
          setSuccess("");
          startTransition(() => {
               register(values)
                    .then((data) => {
                         setError(data.error);
                         setSuccess(data.success);
                    });
          });
     };

     return (
          <CardWrapper
               headerLabel="Create your account"
               backButtonLabel="You have account ?"
               backButtonHref="/auth/login"
               showSocial
          >
               <Form {...form}>
                    <form
                         onSubmit={form.handleSubmit(onSubmit)}
                         className="space-y-6"
                    >
                         <div className="space-y-4">
                              <FormField
                                   control={form.control}
                                   name='name'
                                   render={({ field }) => (
                                        <FormItem>
                                             <FormLabel>Name</FormLabel>
                                             <FormControl>
                                                  <Input
                                                       {...field}
                                                       disabled={isPending}
                                                       placeholder="Jhon Doe"
                                                       type="name"
                                                  />
                                             </FormControl>
                                             <FormMessage />
                                        </FormItem>
                                   )}
                              />
                              <FormField
                                   control={form.control}
                                   name='email'
                                   render={({ field }) => (
                                        <FormItem>
                                             <FormLabel>Email</FormLabel>
                                             <FormControl>
                                                  <Input
                                                       {...field}
                                                       disabled={isPending}
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
                                                       disabled={isPending}
                                                       placeholder="*****"
                                                       type="password"
                                                  />
                                             </FormControl>
                                             <FormMessage />
                                        </FormItem>
                                   )}
                              />
                         </div>
                         <FormError message={error} />
                         <FormSuccess message={success} />
                         <Button
                              disabled={isPending}
                              type="submit"
                              className="w-full text-foreground rounded hover:bg-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:text-secondary-foreground"
                         >
                              Create an account
                         </Button>
                    </form>
               </Form>
          </CardWrapper>
     );
};

