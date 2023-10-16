<script>
  import { user} from "./../../store/auth.js";
  import {goto} from "$app/navigation";
  import {
    Form,
    FormGroup,
    TextInput,
    PasswordInput,
  } from "carbon-components-svelte";
  import {validatePhoneNumber} from "../function/validateForm.js";
  import appAxios from "../../URL/Api.js";

  let phone = "";
  let password = "";
  let errMessenge = "";
  let valid = false;

  const handleLogin = async () => {
    valid = true;
    try {
      const res = await appAxios.post("/login", {phone, password});
      const token = res.token;
      if (token) {
        $user = token;
        window.localStorage.setItem("token", token);
        goto("/", {replaceState: true});
      } else {
        errMessenge = res.msg;
      }
    } catch (error) {
      console.log(error);
    }
  };
  $: invalidPhone = validatePhoneNumber(phone);
  function handle() {
    goto("/auth/signup", {replaceState: true});
  }
</script>

<div class="form-login container mt-5">
  <h1>Đăng Nhập</h1>
  <Form on:submit={handleLogin}>
    <FormGroup>
      <TextInput
        labelText="Phone"
        placeholder="Enter your numerPhone...."
        bind:value={phone}
      />
    </FormGroup>
    {#if valid && !invalidPhone}
      <p class="text-danger">pls inputs number phone</p>
    {/if}
    <FormGroup>
      <PasswordInput
        labelText="Password"
        placeholder="Enter your password..."
        bind:value={password}
      />
    </FormGroup>
    <div class="btn-login">
      {#await errMessenge then errMessenge}
        {#if valid && errMessenge}
          <span class="err text-danger">{errMessenge}</span>
        {/if}
      {/await}
      <div>
        <button type="submit">Login</button>
      </div>
    </div>
  </Form>
</div>

<style>
  .form-login {
    width: 50%;
    height: 100%;
    border: 2px solid #000;
    padding: 50px;
  }
  .err {
    font-size: 15px;
  }
  .btn-login {
    display: flex;
    flex-direction: column;
  }
</style>
