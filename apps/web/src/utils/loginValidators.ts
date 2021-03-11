import { ref } from "vue";

interface User {
  mobile: string;
  password: string;
}

export const loginUser = ref<User>({
  mobile: "",
  password: "",
});

interface Rules {
  mobile: {
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
      }
  )[];
}

// 校验规则
export const rules = ref<Rules>({
  mobile: [
    {
      message: "账号不能为空",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "密码长度必须大于6个字符小于30字符",
      trigger: "blur",
    },
  ],
});
