Insomnia rest api export:

```
type: collection.insomnia.rest/5.0
name: Food api
meta:
  id: wrk_942bdc6d10f049599ca36593a02ad5d2
  created: 1744149616686
  modified: 1744149616686
collection:
  - name: Products
    meta:
      id: fld_4271ab20978c40f480e8542f371a4238
      created: 1744149628845
      modified: 1744150477943
      sortKey: -1744149628845
    children:
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}"
        name: Index
        meta:
          id: req_f3f215041ea84a2b83eb96d31be31c74
          created: 1744149631141
          modified: 1744418168884
          isPrivate: false
          sortKey: -1744149631141
        method: GET
        parameters:
          - id: pair_e624bc70b4eb4e69a965006ea60ca978
            name: name
            value: ab
            disabled: true
        headers:
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}"
        name: Create
        meta:
          id: req_5b3cc644db4046829a07c3c5e9be9a3b
          created: 1744150922298
          modified: 1744151977348
          isPrivate: false
          sortKey: -1744095520232
        method: POST
        body:
          mimeType: application/json
          text: |-
            {
            	"name": "{% faker 'randomProduct' %}",
            	"price": {% faker 'randomPrice' %}
            }
        parameters:
          - id: pair_708b2a62ea8d4e619987b3f5da48a850
            name: name
            value: Chair
            disabled: true
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}/18"
        name: Update
        meta:
          id: req_c9698f92caa8472e89e606a8ae50eae0
          created: 1744152139803
          modified: 1744152769530
          isPrivate: false
          sortKey: -1744068464777.5
        method: PUT
        body:
          mimeType: application/json
          text: |-
            {
            	"name": "{% faker 'randomProduct' %}",
            	"price": {% faker 'randomPrice' %}
            }
        parameters:
          - id: pair_708b2a62ea8d4e619987b3f5da48a850
            name: name
            value: Chair
            disabled: true
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}/19"
        name: Remove
        meta:
          id: req_c30e221b562c44c3a0a4ebdc9bc5f6da
          created: 1744152145550
          modified: 1744152176493
          isPrivate: false
          sortKey: -1744054937050.25
        method: DELETE
        body:
          mimeType: application/json
          text: |-
            {
            	"name": "{% faker 'randomProduct' %}",
            	"price": {% faker 'randomPrice' %}
            }
        parameters:
          - id: pair_708b2a62ea8d4e619987b3f5da48a850
            name: name
            value: Chair
            disabled: true
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
    environment:
      RESOURCE: products
    environmentPropertyOrder:
      "&":
        - RESOURCE
  - name: Tables
    meta:
      id: fld_af2aa52423044c7986a4a34b501306c9
      created: 1744165139270
      modified: 1744165154722
      sortKey: -1744095509399
    children:
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}"
        name: Index
        meta:
          id: req_c84ca126aa884cee8e8b0af459342895
          created: 1744165139271
          modified: 1744165139271
          isPrivate: false
          sortKey: -1744149631141
        method: GET
        parameters:
          - id: pair_e624bc70b4eb4e69a965006ea60ca978
            name: name
            value: ab
            disabled: false
        headers:
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}"
        name: Create
        meta:
          id: req_90feea6e2f424e55ac06d6d44e12f3f4
          created: 1744165139272
          modified: 1744165139272
          isPrivate: false
          sortKey: -1744095520232
        method: POST
        body:
          mimeType: application/json
          text: |-
            {
            	"name": "{% faker 'randomProduct' %}",
            	"price": {% faker 'randomPrice' %}
            }
        parameters:
          - id: pair_708b2a62ea8d4e619987b3f5da48a850
            name: name
            value: Chair
            disabled: true
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}/18"
        name: Update
        meta:
          id: req_291edcdd55f240f58de43f52bc89b41b
          created: 1744165139273
          modified: 1744165139273
          isPrivate: false
          sortKey: -1744068464777.5
        method: PUT
        body:
          mimeType: application/json
          text: |-
            {
            	"name": "{% faker 'randomProduct' %}",
            	"price": {% faker 'randomPrice' %}
            }
        parameters:
          - id: pair_708b2a62ea8d4e619987b3f5da48a850
            name: name
            value: Chair
            disabled: true
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}/19"
        name: Remove
        meta:
          id: req_7bcbcefc062c45acac6e583ae4bc6436
          created: 1744165139274
          modified: 1744165139274
          isPrivate: false
          sortKey: -1744054937050.25
        method: DELETE
        body:
          mimeType: application/json
          text: |-
            {
            	"name": "{% faker 'randomProduct' %}",
            	"price": {% faker 'randomPrice' %}
            }
        parameters:
          - id: pair_708b2a62ea8d4e619987b3f5da48a850
            name: name
            value: Chair
            disabled: true
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
    environment:
      RESOURCE: tables
    environmentPropertyOrder:
      "&":
        - RESOURCE
  - name: Tables sessions
    meta:
      id: fld_f17684c8f2b74ad38fc951966c69570a
      created: 1744166038577
      modified: 1744248167373
      sortKey: -1744068449676
    children:
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}"
        name: Index
        meta:
          id: req_1a9939e209e84aa6a1f20286c485cfd2
          created: 1744166038579
          modified: 1744418102348
          isPrivate: false
          sortKey: -1744095520232
        method: GET
        body:
          mimeType: application/json
          text: |-
            {
            	"table_id": 1
            }
        parameters:
          - id: pair_c163161ce2584716855fa228b8f1522b
            disabled: false
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}/3"
        name: Update
        meta:
          id: req_65fe38a8cf294ac189b8018c4e29dc9c
          created: 1744166403935
          modified: 1744320066390
          isPrivate: false
          sortKey: -1744081992504.75
        method: PUT
        body:
          mimeType: application/json
          text: |-
            {
            	"table_id": 1
            }
        parameters:
          - id: pair_708b2a62ea8d4e619987b3f5da48a850
            name: name
            value: Chair
            disabled: true
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}/"
        name: Create
        meta:
          id: req_86629e431b944f218c99177ae375337a
          created: 1744250916594
          modified: 1744420834476
          isPrivate: false
          sortKey: -1744088756368.375
        method: POST
        body:
          mimeType: application/json
          text: |-
            {
            	"table_id": 2
            }
        parameters:
          - id: pair_708b2a62ea8d4e619987b3f5da48a850
            name: name
            value: Chair
            disabled: true
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
    environment:
      RESOURCE: tables-sessions
    environmentPropertyOrder:
      "&":
        - RESOURCE
  - name: Orders
    meta:
      id: fld_668224cfc8c74c9dbffa134cdbcede2f
      created: 1744320848706
      modified: 1744320867944
      sortKey: -1744054919814.5
    children:
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}/table-session/2"
        name: Index by Session
        meta:
          id: req_dcde76aa64534133bce6c273a5e9bfdf
          created: 1744320848707
          modified: 1744420853903
          isPrivate: false
          sortKey: -1744095520232
        method: GET
        body:
          mimeType: application/json
          text: |-
            {
            	"table_id": 1
            }
        parameters:
          - id: pair_c163161ce2584716855fa228b8f1522b
            disabled: false
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}/"
        name: Create
        meta:
          id: req_520ad97992dc4aed8b5ab18529bc63b6
          created: 1744320848708
          modified: 1744420846142
          isPrivate: false
          sortKey: -1744088756368.375
        method: POST
        body:
          mimeType: application/json
          text: |-
            {
            	"table_session_id": 2,
            	"product_id":	5,
            	"quantity": 1
            }
        parameters:
          - id: pair_708b2a62ea8d4e619987b3f5da48a850
            name: name
            value: Chair
            disabled: true
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: "{{ _.BASE_URL }}/{{ _.RESOURCE }}/table-session/2/total-price"
        name: Show
        meta:
          id: req_d45f8d18e9654f70a5d4c44697f88756
          created: 1744339347003
          modified: 1744420863326
          isPrivate: false
          sortKey: -1744092138300.1875
        method: GET
        body:
          mimeType: application/json
          text: |-
            {
            	"table_id": 1
            }
        parameters:
          - id: pair_c163161ce2584716855fa228b8f1522b
            disabled: false
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/11.0.1
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
    environment:
      RESOURCE: orders
    environmentPropertyOrder:
      "&":
        - RESOURCE
cookieJar:
  name: Default Jar
  meta:
    id: jar_e16f00bc1a6f0fec9e8b81b1dbf111032184b557
    created: 1744149616689
    modified: 1744149616689
environments:
  name: Base Environment
  meta:
    id: env_e16f00bc1a6f0fec9e8b81b1dbf111032184b557
    created: 1744149616688
    modified: 1744149616688
    isPrivate: false
  subEnvironments:
    - name: Dev
      meta:
        id: env_6c16ef70145a41e0aabcfdb9ca767c2c
        created: 1744150174372
        modified: 1744150359150
        isPrivate: false
        sortKey: 1744150174372
      data:
        BASE_URL: localhost:3333
      color: "#68bb44"
```
