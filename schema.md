# Schema Design

`pk` = Primary Key
`ref: >` = Many to one
`ref: <` = One to many
`ref: -` = One to one

## Lists Table

```
Table lists {
  id serial [pk]
  name varchar(255)
  owner varchar(255)
}
```

## Items Table

```
Table items {
  id serial [pk]
  name varchar(255)
}
```

## Items in List Table

```
Table items-in-list {
  lists id [ref: > lists.id, not null]
  items id [ref: > items.id, not null]
  quantity int [not null]
  done boolean [not null]
}
```

## Users Table 

```
  id serial [pk]
  username varchar(255)
  pro-pic bytea
  password 
```

## Users in List Table

```
users-in-list {
  lists id [ref: > lists.id, not null]
  users id [ref: > items.id, not null]
}
```