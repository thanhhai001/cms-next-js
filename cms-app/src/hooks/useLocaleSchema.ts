"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useLocaleSchema(schema: CallableFunction, defaults: object) {
  const t = useTranslations("validations");
  const formSchema = schema(t);
  const formLocale = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaults
  })

  const { register, handleSubmit, formState: { errors } } = formLocale

  return { register, errors, handleSubmit };
}