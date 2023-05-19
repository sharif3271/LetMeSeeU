import toast from 'react-hot-toast';

export function ErrorToast(message: string, duration?: number) {
  return toast.error(
    message || 'Sorry! something went wrong.',
    {
      style: {
        backgroundColor: '#414244',
        color: 'white',
      },
      duration: duration || 8000,
    }
  );
}