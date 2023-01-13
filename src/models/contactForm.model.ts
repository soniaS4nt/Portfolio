export interface IContactForm {
    fullName: string;
    email: string;
    message: string;
}

export interface IContactFormErrors {
    fullName?: string;
    email?: string;
    message?: string;
}