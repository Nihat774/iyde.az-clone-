import Swal from "sweetalert2";

export const SuccessAlert = (text) => {
  return Swal.fire({
    position: "top-end",
    icon: "success",
    title:text,
    showConfirmButton: false,
    timer: 1500,
    width:"20em",
    
    
  });
};