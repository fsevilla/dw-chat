export enum ContactFormSubject {
    SUGGESTIONS = 'suggestions',
    GREETINGS = 'greetings'
}

export interface ContactData {
    name: string;
    email: string;
    phone: string;
    subject: ContactFormSubject;
    message: string;
}
