import { reactive, ref } from 'vue';

const useToggle = (initToggle = true, cb?: () => any) => {
  const toggle = ref(initToggle);

  return ({
    toggle
  });
};

export default useToggle;
