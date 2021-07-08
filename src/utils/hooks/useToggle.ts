import { ref } from 'vue';

const useToggle = (initToggle = true, cb?: () => any) => {
  const toggle = ref(initToggle);

  const handleToggle = () => {
    toggle.value = !toggle.value;
  };

  return ({
    toggle,
    handleToggle
  });
};

export default useToggle;
