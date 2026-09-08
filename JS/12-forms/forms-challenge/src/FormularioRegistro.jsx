import { useForm } from 'react-hook-form';

export function FormularioRegistro() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert("Bem-vindo(a) Herói: " + data.nomeHeroi);
    console.log("Dados do formulário:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '400px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>Cadastro da Liga</h2>
      
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nome de Herói:</label>
        <input 
          {...register("nomeHeroi", { required: "O nome não pode ficar vazio" })} 
          style={{ width: '100%', padding: '8px', border: errors.nomeHeroi ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
        />
        {errors.nomeHeroi && <p style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>{errors.nomeHeroi.message}</p>}
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Idade:</label>
        <input 
          type="number"
          {...register("idade", { 
            required: "Idade é obrigatória", 
            min: { value: 18, message: "Você deve ter pelo menos 18 anos para ser um herói" },
            valueAsNumber: true
          })} 
          style={{ width: '100%', padding: '8px', border: errors.idade ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
        />
        {errors.idade && <p style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>{errors.idade.message}</p>}
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Planeta Natal:</label>
        <input 
          {...register("planetaNatal")} 
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Senha:</label>
        <input 
          type="password"
          {...register("senha", { 
            required: "A senha é obrigatória", 
            minLength: { value: 8, message: "A senha deve ter no mínimo 8 caracteres" } 
          })} 
          style={{ width: '100%', padding: '8px', border: errors.senha ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
        />
        {errors.senha && <p style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>{errors.senha.message}</p>}
      </div>

      <button type="submit" style={{ marginTop: '10px', padding: '12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
        Cadastrar
      </button>

    </form>
  );
}
