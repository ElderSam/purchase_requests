-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE public.costumers
(
    id SERIAL PRIMARY KEY,
    name character varying(50) NOT NULL,
    phone character varying(11) NOT NULL,
    birth_date date NOT NULL,
    status smallint DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.order_product
(
    id SERIAL PRIMARY KEY,
    id_order integer NOT NULL,
    id_product integer NOT NULL,
    unit_value numeric NOT NULL,
    amount smallint NOT NULL
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.orders
(
    id SERIAL PRIMARY KEY,
    id_costumer integer NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.products
(
    id SERIAL PRIMARY KEY,
    name character varying(20) NOT NULL,
    value numeric NOT NULL,
    status smallint DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE public.order_product
    ADD FOREIGN KEY (id_order)
    REFERENCES public.orders (id)
    NOT VALID;


ALTER TABLE public.order_product
    ADD FOREIGN KEY (id_product)
    REFERENCES public.products (id)
    NOT VALID;


ALTER TABLE public.orders
    ADD FOREIGN KEY (id_costumer)
    REFERENCES public.costumers (id)
    NOT VALID;

END;