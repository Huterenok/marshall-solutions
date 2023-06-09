import axios from "axios";

export const sendEmail = async (form: HTMLFormElement | null) => {
  //@ts-ignore
  // const name: string = form?.name.value || "";
  // const company: string = form?.company.value || "";
  // const email: string = form?.email.value || "";
  // const phone: string = form?.phone.value || "";
  // const file: File = form?.file.files[0] || "";
  // let arrayBuffer;
  // if (file) {
  //   arrayBuffer = await file.arrayBuffer();
  // } else {
  //   arrayBuffer = new ArrayBuffer(1);
  // }

  // const text = `
  // 	Name: ${name},
  // 	Company: ${company},
  // 	Email: ${email},
  // 	Phone: ${phone},
  // `;

  // const body = JSON.stringify({
  //   subject: "New request",
  //   text,
  // });

  // const res = await axios.post(import.meta.env.VITE_SERVER_URL, body);
  // console.log(res);

  const name: string = form?.name.value || "";
  const company: string = form?.company.value || "";
  const email: string = form?.email.value || "";
  const phone: string = form?.phone.value || "";
  const file: File = form?.file.files[0] || "";

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
  formData.set("user_file", file, file.name);

  const res = await axios.post(import.meta.env.VITE_SERVER_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(res);
};
