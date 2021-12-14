import Swal from 'sweetalert2';

export const Toast = (title, icon, position = 'top-end') => {
    const toast = Swal.mixin({
        toast: true,
        position,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutRight',
        },
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });
    toast.fire({ icon, title });
};