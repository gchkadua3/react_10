

import React from 'react';

const names = [
  "Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar"
];

const NameTable = () => {

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid #ddd'
  };

  const thTdStyle = {
    border: '1px solid #ddd', 
    padding: '8px',
    textAlign: 'left'
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thTdStyle}>Number</th>
          <th style={thTdStyle}>Name</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <tr key={index}>
            <td style={thTdStyle}>{index + 1}</td>
            <td style={thTdStyle}>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NameTable;
export { names };
