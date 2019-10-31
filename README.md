### Install
```bash
npm install -g generator-ksmodule
```

### How to use

```bash
yo ksmodule --module myModule --group com.mymodule --mainClass MyClassApplication
```

above command will generate 

```bash
myModule
└── src
    └── main
        ├── kotlin
        │   └── com
        │       └── mymodule
        │           └── MyClassApplication.kt
        └── resources
            ├── META-INF
            │   └── spring-configuration-metadata-whitelist.properties
            └── application.yml
```

