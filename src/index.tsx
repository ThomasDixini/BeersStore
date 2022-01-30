import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'



createServer({

  models: {
    product: Model,
  },

  seeds(server){
    server.db.loadData({
      products: [
        {
        id: 1,
        title: "Budweieser",
        description: "A melhor"
        },
        {
        id: 2,
        title: "Budweieser",
        description: "A melhor"
        }
      ]

    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/list/products', () => {
      return this.schema.all('product')
    })

    this.post('/list/products', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('product', data)
    })

    
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


