import React, { useEffect} from 'react'
import { Card, Avatar, Spin } from "antd";
import useDataStore from '../useDataStore'
import styles from './DetailsList.module.css'

const { Meta } = Card;

export default function DetailsList() {
  const {data, loading, error, fetchData} = useDataStore()

  useEffect(()=>{
   fetchData()
  },[])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detalles de la lista</h1>
      {loading && <div className={styles.loading}><Spin /></div>}
      {error && <div className={styles.error}>Error: {error.message}</div>}

      {data?.map(item => (
        <Card
          key={item.id}
          style={{ width: '100%' }}
          cover={null}
          hoverable
        >
          <Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.name}
            description={`Creado el: ${new Date(item.createdAt).toLocaleDateString()}`}
          />
        </Card>
      ))} 
    </div>
  )
}
