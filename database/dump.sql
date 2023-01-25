--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;


CREATE ROLE admin;
ALTER ROLE admin WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:0opThxWGYr1KCTboyWFSWA==$uTykUfv+GwKi/jrGfkGC9R+SzZVaGXosFoQ9ASQchhM=:wgEZiAEv8/7eg2iFV6gejcAA8PL+GO5h0QuLtA1h4Zc=';

--
-- Databases
--

--
--
-- Database "team-08-wonderful-game" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Debian 14.6-1.pgdg110+1)
-- Dumped by pg_dump version 14.6 (Debian 14.6-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: team-08-wonderful-game; Type: DATABASE; Schema: -; Owner: admin
--

CREATE DATABASE "team-08-wonderful-game" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE "team-08-wonderful-game" OWNER TO admin;

\connect -reuse-previous=on "dbname='team-08-wonderful-game'"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: messages; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.messages (
    id integer NOT NULL,
    author_id integer NOT NULL,
    date_created timestamp(6) without time zone NOT NULL,
    content character varying(1000) NOT NULL,
    thread_id integer NOT NULL
);


ALTER TABLE public.messages OWNER TO admin;

--
-- Name: threads; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.threads (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(1000) NOT NULL,
    author_id integer NOT NULL,
    date_created timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.threads OWNER TO admin;

--
-- Name: users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    avatar_link character varying(1000)
);


ALTER TABLE public.users OWNER TO admin;

--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.messages (id, author_id, date_created, content, thread_id) FROM stdin;
\.


--
-- Data for Name: threads; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.threads (id, title, description, author_id, date_created) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.users (id, name, avatar_link) FROM stdin;
\.


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: threads threads_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.threads
    ADD CONSTRAINT threads_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: messages author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT author_fkey FOREIGN KEY (author_id) REFERENCES public.users(id) NOT VALID;


--
-- Name: messages thread_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT thread_fkey FOREIGN KEY (thread_id) REFERENCES public.threads(id) ON DELETE CASCADE NOT VALID;


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

