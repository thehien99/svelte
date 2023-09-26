<script>
  import {goto} from "$app/Navigation";
  import {
    Form,
    FormGroup,
    TextInput,
    PasswordInput,
    Button,
  } from "carbon-components-svelte";
  import appAxios from "../../URL/Api";
  import {user} from "../../store/auth";
  import {validatePhoneNumber} from "../function/validateForm";
  let name = "";
  let password = "";
  let phone = "";
  let valid = false;
  let err = "";
  const handleSignUp = async () => {
    valid = true;
    try {
      const response = await appAxios.post("/api/register", {
        name,
        password,
        phone,
      });
      if (response.err === 0) {
        $user = response;
        goto("/", {replaceState: true});
      } else {
        err = response.msg;
      }
    } catch (error) {
      console.log(error);
    }
  };
  $: invalidPhone = validatePhoneNumber(phone);
  $: invalidPassword = password.length >= 6;
</script>

<div class="form-login container mt-5">
  <h1>Đăng Kí</h1>
  <Form on:submit={handleSignUp}>
    <FormGroup>
      <TextInput
        labelText="Name"
        placeholder="Enter you name..."
        bind:value={name}
      />
      {#if valid && name === ""}
        <p class="text-danger">Không thể bỏ qua ô này !</p>
      {/if}
    </FormGroup>
    <FormGroup>
      <PasswordInput
        labelText="Password"
        placeholder="Enter your password..."
        bind:value={password}
      />
      {#if valid && !invalidPassword}
        <p class="text-danger">Mật khẩu phải lớn hơn 6 kí tự</p>
      {/if}
    </FormGroup>
    <FormGroup>
      <TextInput
        bind:value={phone}
        labelText="Number Phone"
        placeholder="Enter your numberphone..."
      />
    </FormGroup>
    {#if valid && !invalidPhone}
      <p class="text-danger">Số điện thoại không đúng!</p>
    {/if}
    <p class="text-danger">{err}</p>
    <Button type="submit">SignUp</Button>
  </Form>
</div>

<style>
  .form-login {
    width: 50%;
    height: 100%;
    border: 2px solid #000;
    padding: 50px;
  }
</style>
