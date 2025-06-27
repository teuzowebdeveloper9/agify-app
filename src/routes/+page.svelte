<script>
  // @ts-nocheck

  export let data;

  let name = data.name || "";
  let timeout;

  function handleInput(event) {
    clearTimeout(timeout);
    name = event.target.value;

    timeout = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (name) {
        params.set("name", name);
      } else {
        params.delete("name");
      }
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", newUrl);

      window.location.reload();
    }, 700);
  }
</script>

<main>
  <h1>Bem-vindo!</h1>
  <p>Digite seu nome:</p>
  <input
    pattern="[A-Za-z]+"
    type="text"
    placeholder="Digite um nome..."
    value={name}
    on:input={handleInput}
  />

  {#if data.age}
    <p>
      O nome <strong>{data.name}</strong> tem uma idade estimada de
      <strong>{data.age}</strong> anos.
    </p>
  {/if}
</main>

<style>
  main {
    background: linear-gradient(135deg, #685353, #867373);
    max-width: 500px;
    margin: 80px auto;
    padding: 40px 30px;
    border-radius: 12px;
    font-family: "Poppins", sans-serif;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    margin: 20px 0;
    font-size: 1.2rem;
    color: #555;
  }

  input {
    padding: 15px 20px;
    border: 2px solid #555;
    border-radius: 8px;
    width: 200px;
    font-size: 1.1rem;
    transition:
      border 0.2s ease,
      box-shadow 0.2s ease;
  }

  input:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.4);
  }

  strong {
    color: #000000;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    main {
      margin: 40px 20px;
      padding: 30px 20px;
    }

    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }

    input {
      font-size: 1rem;
    }
  }
</style>
