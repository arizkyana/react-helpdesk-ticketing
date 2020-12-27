import * as Yup from 'yup';

export const CreateFormSchema = Yup.object().shape({
    Title: Yup.string()
        .min(3, 'Judul ticket terlalu pendek')
        .max(200, 'Judul ticket terlalu panjang')
        .required('Judul ticket harus di isi'),
    Priority: Yup.string().required('Priority ticket harus di isi'),
    Description: Yup.string()
        .min(3, 'Description terlalu pendek')
        .max(1500, 'Description terlalu panjang')
        .required('Description ticket harus di isi'),
});

export const CreateFormInitialValues = {
    Title: '',
    Priority: '',
    Description: '',
};
