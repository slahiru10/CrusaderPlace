

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

export interface FormData {
  title: string;
  price: string;
  category: string;
  state: string;
  payment: string[];
  media: File | null;
}

export const useCreatePostForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    price: '',
    category: '',
    state: '',
    payment: [],
    media: null,
  });

  const navigate = useNavigate();
  const toast = useToast();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prevState => ({ ...prevState, state: value }));
  };

  const handleCheckboxChange = (values: Array<string>) => {
    setFormData(prevState => ({ ...prevState, payment: values }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null; // Get the first file
    if (file) {
      setFormData(prevState => ({ ...prevState, media: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.payment.length === 0) {
      alert('Please select at least one payment option.');
      return;
    }
    toast({
        title: 'Post Created',
        description: 'Your post has been successfully created.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    console.log(formData);
    // Here, implement the submission logic or navigation
  };

  return {
    formData,
    handleChange,
    handleRadioChange,
    handleCheckboxChange,
    handleSubmit,
    handleFileChange,
    navigate,
  };
};
