import axios from "axios";
import emailJs from "@emailjs/browser";

export const sendEmail = async (form: HTMLFormElement) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const name: string = form?.name.value;
  const company: string = form?.company.value;
  const email: string = form?.email.value;
  const phone: string = form?.phone.value;
  const file: File = form?.file.files[0];
  const text = `
   		Name: ${name}\n
   		Company: ${company}\n
   		Email: ${email}\n
   		Phone: ${phone}\n,
  `;
  const subject = "New request";
  const formData = new FormData();
  formData.set("subject", subject);
  formData.set("text", text);
  if (file) {
    formData.set("user_file", file, file.name);
  }
  const res = await axios.post(import.meta.env.VITE_SERVER_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(res);

  //FRONT-VERSION
  // emailJs
  //   .sendForm(
  //     import.meta.env.VITE_SERVICE,
  //     import.meta.env.VITE_FORM,
  //     form,
  //     import.meta.env.VITE_PUBLIC_KEY
  //   )
  //   .then((res) => console.log(res))
  //   .catch((err) => alert("File is too large"));
};
