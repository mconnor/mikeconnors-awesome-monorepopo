<script lang="ts">
  let responseMessage: string;

  export let fetchData: () => Promise<string>;

  let message: string = 'Loading...';

  async function getData() {
    message = await fetchData();
  }

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch(fetchData, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    responseMessage = data.message;
  }
</script>

<form on:submit={submit}>
  <label>
    Name
    <input type="text" id="name" name="name" required />
  </label>
  <label>
    Email
    <input type="email" id="email" name="email" required />
  </label>
  <label>
    Message
    <textarea id="message" name="message" required />
  </label>
  <button>Send</button>
  {#if responseMessage}
    <p>{responseMessage}</p>
  {/if}
</form>
