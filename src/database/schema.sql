CREATE DATABASE IF NOT EXISTS mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Categories (
    id  UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS Categories (
    id  UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR,
    category_id UUID,
    foreign key (category_id) references Categories(id)
);