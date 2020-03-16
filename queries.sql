-- Read data
SELECT CustomerName, City, Country 
FROM Customers;

--List of suppliers
SELECT Country, City, SupplierName
FROM Suppliers
WHERE Country = 'USA';

-- All the Customers we have in USA
SELECT *
FROM Customers
WHERE Country = 'USA';

-- All the Customers we have in Paris and USA
SELECT *
FROM Customers
WHERE Country = 'USA' or  City = 'Paris';

-- All the Customers we have in Paris and USA sort by country asc and by city desc
SELECT Country, City, CustomerName, ContactName
From Customers
Where Country = 'USA'or City= 'Paris'
ORDER BY Country Asc, City Desc;


-- all products with price higher than 25
SELECT * From [Products]
where Price > 25

--top 5 expensive products
SELECT * From [Products]
where Price > 25
ORDER BY price desc
LIMIT 5;


--Add data
INSERT INTO [Shippers] (ShipperName, Phone) 
VALUES ('Lamda Shipping', '(555) 555-1234');

--Update data/ RUN A SELECT FIRST!
--SELECT * FROM [Shippers]
UPDATE [Shippers]
SET Phone = '(505) 555-2345'
WHERE ShipperID = 4;

-- Delete data
--SELECT * FROM [Shippers]
Delete [Shippers]
WHERE ShipperID = 4;