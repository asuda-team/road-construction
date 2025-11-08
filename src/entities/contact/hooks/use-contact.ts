import { useMutation } from "@tanstack/react-query";
import { sendRequest } from "../api";
import { useForm } from "react-hook-form";
import { IContact } from "../model";
import { useEffect, useState } from "react";

const defaultValues: IContact = {
  title: "",
  description: "",
  email: "",
  type: "feedback",
};

const useContact = () => {
  const [message, setMessage] = useState<string>("");
  const methods = useForm<IContact>({
    defaultValues: defaultValues,
  });

  const { control, handleSubmit, reset } = methods;

  const { mutate, isPending } = useMutation({
    mutationKey: ["send-request"],
    mutationFn: sendRequest,
    onSuccess: () => {
      setMessage('contact.sent');
      reset(defaultValues);
    },
    onError: () => {
      setMessage('contact.failed');
    },
  });

  useEffect(() => {
    if(isPending) {
      setMessage('');
    }
  }, [isPending]);

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return { control, onSubmit, isPending, message };
};

export default useContact;
