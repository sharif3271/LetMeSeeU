import toast from 'react-hot-toast';

export function SuccessToast(message: string, duration?: number) {
  return toast.success(message, {
    style: {
      backgroundColor: '#414244',
      color: 'white',
    },
    duration: duration || 4000,
  });
}
// green #5dd891
