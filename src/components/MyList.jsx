import React from 'react'
import useDataStore from '../useDataStore'
import { useEffect } from 'react'
import { Spin } from 'antd'
import styles from './MyList.module.css'

export default function MyList() {
    const {data, loading, error, fetchData} = useDataStore()

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Usuarios</h1>
      {loading && <div className={styles.loading}><Spin /></div>}
      {error && <div className={styles.error}>Error: {error.message}</div>}

      <ul className={styles.list}>
        {data?.map(item => (
          <li key={item.id} className={styles.listItem}>
            <div className={styles.userIcon}>
              {item.name.charAt(0).toUpperCase()}
            </div>
            <p className={styles.userName}>{item.name}</p>
          </li>
        ))}         
      </ul>
    </div>
  )
}
