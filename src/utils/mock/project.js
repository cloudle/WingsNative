import faker from 'faker';

export let projects = [{
  title: 'The Bridgeview',
  investor: 'Nam Long',
  address: 'Đường số 11, Tân Thuận Đông, Quận 7, HCM'
}, {
  title: 'Master Thảo Điền',
  investor: 'Thảo Điền investment & Vingroup',
  address: 'Xa Lộ Hà Nội, Thảo Điền, Quận 2, HCM'
}, {
  title: 'An Bình City',
  investor: 'Gleximco',
  address: 'Cổ Nhuế, Từ Liêm, Hà Nội'
}, {
  title: 'Khu đô thị Sala',
  investor: 'Đại Quang Minh',
  address: 'Mai Chí Thọ, Thủ Thiêm, Quận 2, HCM'
}, {
  title: 'Khải Hoàn Paradise',
  investor: 'Khải Hoàn Corporation',
  address: 'Lê Văn Lương, Nhà Bè, HCM'
}, {
  title: 'Centara Thủ Thiêm',
  investor: 'Điền Phúc Thành',
  address: 'Mai Chí Thọ, An Phú, HCM'
}];

for (let project of projects) {
  project.bookCount = faker.random.number(100);
  project.soldCount = faker.random.number(200);
  project.remaining = faker.random.number(200);
}