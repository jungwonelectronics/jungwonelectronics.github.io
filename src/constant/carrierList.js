export const header = [
  { id: 'brand', label: 'Brand' },
  { id: 'machine', label: 'Machine(color)' },
  { id: 'jweCode', label: 'JWE Code' },
  { id: 'model', label: 'Model' },
  { id: 'useInList', label: 'Recommended Machine for use In' },
];

export const list = [
  {
    brand: 'Samsung',
    productList: [
      {
        machine: 'MFP/C',
        jweCode: ['TC23s'],
        model: ['SL-X3220'],
        useInList: [
          'SL-X3220/3280, SL-X4220/4300, CLX-9206/9201',
        ],
      },
    ],
  },
  {
    brand: 'Xerox',
    productList: [
      {
        machine: 'Printer/M',
        jweCode: ['TC-19/TD-19'],
        model: ['Phaser5500'],
        useInList: [
          'Phaser 5500/5550/5520/5230',
          'Tally 9050, Lexmark W840',
          'Dell 7330, IBM Inforprinter 1585',
          'Docu Printer 405/505/4060/5060',
        ],
        remarks: 'Developer',
      },
      {
        machine: 'Copier/M',
        jweCode: ['TC-19/TD-19'],
        model: ['WorkCenter M123'],
        useInList: [
          'WorkCentre M133/M128/M123/M118',
          'WorkCentre 5230/5225/5222',
          'DocuCentre II 5010/4000',
          'DocuCentre 450I/550I/336/286/236/186/156/A285/A235',
          'DocuCentre 2005/2055/3005/2007/3007',
          'CopyCentre C133/C128/C123/C118',
        ],
        remarks: 'Developer',
      },
      {
        machine: 'MFP/M',
        jweCode: ['TC40'],
        model: ['X4110'],
        useInList: [
          'Xerox 4110/4127/4595/4590',
        ],
        remarks: 'Carrier',
      },
      {
        machine: 'Copier/C',
        jweCode: ['TC41/TD41'],
        model: ['DCC2270'],
        useInList: [
          'DCC2270/DCC2275/DCC3370/DCC3375/DCC4470/DCC5570',
          'DCC2276/3376/4476',
          'DCC5580/7780/5585/7785'
        ],
      },
    ],
  },
  {
    brand: 'Konica-Minolta',
    productList: [
      {
        machine: 'Copier/C',
        jweCode: ['TC23s'],
        model: ['BHC652'],
        useInList: [
          'Bizhub C652/C552/C452',
          'Bizhub C450/351/350',
          'Bizhub C250/252',
        ],
      },
      {
        machine: 'Copier/C',
        jweCode: ['TC23s'],
        model: ['BHC360'],
        useInList: [
          'BHC 220/280/360',
        ],
      },
      {
        machine: 'Copier/C',
        jweCode: ['TC21s'],
        model: ['BHC253'],
        useInList: [
          'Bizhub C200/203/253/353',
        ],
      },
      {
        machine: 'Copier/M',
        jweCode: ['TC22s'],
        model: ['BH250'],
        useInList: [
          'Bizhub 200/222/250/282/350/360/362',
        ],
      },
      {
        machine: 'MFP/M',
        jweCode: ['TC40'],
        model: ['Bizhub 450i'],
        useInList: [
          'BHC250i/D450',
        ],
        remarks: 'Carrier, Developer',
      },
      {
        machine: 'MFP/M',
        jweCode: ['TC41'],
        model: ['BHC224'],
        useInList: [
          'BHC 224/284/364(TN321), BHC 225/258/368(TN324)',
          'Bizhub 227/287/367, Bizhub 200/222/250/282/350/362',
          'BH283/263/423(TN217)',
        ],
        remarks: 'Carrier, Developer',
      },
    ],
  },
  {
    brand: 'Canon',
    productList: [
      {
        machine: 'Printer/C',
        jweCode: ['TC21s'],
        model: ['CLC3220'],
        useInList: [
          'CLC 2620/3220/3200/2600, GPR11',
        ],
      },
      {
        machine: 'Printer/C',
        jweCode: ['TC22s'],
        model: ['LBP5960'],
        useInList: [
          'LBP 5960/5900/5910/5600/5610, GPR23',
        ],
      },
      {
        machine: 'Copier/C',
        jweCode: ['TC21s'],
        model: ['iRC3200'],
        useInList: [
          'iRC 2620/3220/3200/2600, GPR11',
          'iRC 4580/5180/4080/5185/4040/5080/5151',
        ],
      },
      {
        machine: 'Copier/C',
        jweCode: ['TC22s'],
        model: ['iRC3480'],
        useInList: [
          'iRC 3480/3380/3080/2550/2880, GPR23',
        ],
      },
      {
        machine: 'Copier/C',
        jweCode: ['TC41'],
        model: ['iR ACVC3320'],
        useInList: [
          'IR ACVC 3320/3325/3330, NPG67, NPG71, NPG46',
        ],
        remarks: 'Carrier, Developer',
      },
    ],
  },
  {
    brand: 'Ricoh Carrier Developer',
    productList: [
      {
        machine: 'MFP/M',
        jweCode: ['TC51', 'TD51', '(CD55)'],
        model: ['Aficio2035'],
        useInList: [
          'Aficio MP1600/2000/2352/2500/2510/2550',
          'Aficio MP2851/2852/3010/3350/3351/3352',
          'Aficio 1035/1045, Aficio 2035/2045/3035/3045',
          'Aficio 1060/1075/2051/2060/2075',
          'Aficio MP5500/6000/6001/6002/6500/7000',
          'Aficio MP7001/7002/7500/7502/8000/8001',
          'Aficio MP9001/9002',
          'Aficio 1085/1105/2090/2105',
          'Toshiba e studio 1050/900',
        ],
        remarks: 'Carrier, Developer'
      },
      {
        machine: 'MFP/M',
        jweCode: ['TC50', 'TD50'],
        model: ['Aficio1515'],
        useInList: [
          'Aficio 1015/1018, Aficio 220/270',
          'Aficio 2015/2016/2018/2020/3025/3030'
        ],
        remarks: 'Carrier, Developer'
      },
      {
        machine: 'MFP/M',
        jweCode: ['MC51'],
        model: ['Samsung ML8951(A3)', 'Ricoh SP6100'],
        useInList: [
          'Samsung ML8951(A3) ,ML8851(A4)',
          'Ricoh SP6100/6200/6300, SP4100/4200/4300'
        ],
        remarks: ''
      },
      {
        machine: 'MFP/M',
        jweCode: ['TC41'],
        model: ['RICOH MPC2504'],
        useInList: [
          'SINDOH D430/431/432',
          'MPC2004/MPC2504/MPC3004'
        ],
        remarks: ''
      },
    ],
  },
];
