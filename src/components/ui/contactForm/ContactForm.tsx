import './ContactForm.scss'
import { useForm } from 'react-hook-form'
import Input from '@components/ui/input/Input'
import Button from '@components/ui/button/Button'
import Select from '@components/ui/select/Select'
import Textarea from '@components/ui/textarea/Textarea'

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function ContactForm(): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    })

    const onSubmit = (data: FormData) => {
        // send the form data here
        console.log('onSubmit', data)
    }

    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Name"
                    {...register('name', { required: 'Please enter your name' })}
                    error={errors.name?.message}
                />
                <Input
                    label="Email"
                    type="email"
                    {...register('email', {
                        required: 'Please enter your email',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                            message: 'Please enter a valid email address',
                        },
                    })}
                    error={errors.email?.message}
                />
                <Select
                    label="Subject"
                    value={'-'}
                    {...register('subject', { required: 'Please select a subject' })}
                    options={[
                        { value: 'General Inquiry', label: 'General Inquiry' },
                        { value: 'Feedback', label: 'Feedback' },
                        { value: 'Support', label: 'Support' },
                    ]}
                    // error={errors.subject?.message}
                />
                <Textarea
                    label="Message"
                    {...register('message', { required: 'Please enter a message' })}
                    error={errors.message?.message}
                />
                <Button type="submit">Send</Button>
            </form>
        </>
    )
}

export default ContactForm
