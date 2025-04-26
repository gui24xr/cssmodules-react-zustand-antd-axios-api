import React from 'react'
import useDataStore from '../useDataStore'
import styles from './Form.module.css'

export default function Form() {
    const {loading, error, createPeople} = useDataStore()
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const name = formData.get('name')
        createPeople({
          payload: {name},
          onSuccess: ()=> alert('Persona creada correctamente'),
          onError: ()=> alert('Error al crear la persona')
        })
    }
    
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Agregar personas</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nombre</label>
          <input 
            id="name"
            name="name" 
            placeholder='Nombre'
            className={styles.input}
            required
          />
        </div>
        <button 
          type='submit' 
          className={styles.button}
          disabled={loading}
        >
          {loading ? 'Creando...' : 'Aceptar'}
        </button>
      </form>
    </div>
  )
}
