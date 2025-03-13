CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES users(id) 
);

INSERT INTO users (id, name, parent_id) VALUES
(1, 'Zaki', 2),
(2, 'Ilham', NULL),
(3, 'Irwan', 2),
(4, 'Arka', 3);

select a.id, a.name, b.name as parent_name from users a left join users b on a.parent_id = b.id;