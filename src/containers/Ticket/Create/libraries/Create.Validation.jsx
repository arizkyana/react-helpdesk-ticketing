import * as Yup from 'yup';

const CreateValidation = Yup.object().shape({
    Title: Yup.string()
        .min(3, 'Judul ticket terlalu pendek')
        .max(200, 'Judul ticket terlalu panjang')
        .required('Judul ticket harus di isi'),
    Priority: Yup.string().required('Priority ticket harus di isi'),
});

export default CreateValidation;