const users = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phoneNumber: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phoneNumber: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phoneNumber: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phoneNumber: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phoneNumber: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phoneNumber: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phoneNumber: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Inactive',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phoneNumber: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phoneNumber: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phoneNumber: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phoneNumber: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phoneNumber: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phoneNumber: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phoneNumber: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Inactive',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phoneNumber: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phoneNumber: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phoneNumber: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phoneNumber: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phoneNumber: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phoneNumber: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Inactive',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phoneNumber: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phoneNumber: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phoneNumber: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phoneNumber: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phoneNumber: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phoneNumber: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phoneNumber: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phoneNumber: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Inactive',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phoneNumber: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phoneNumber: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phoneNumber: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phoneNumber: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phoneNumber: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phoneNumber: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phoneNumber: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phoneNumber: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Inactive',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phoneNumber: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
];
const tableBody = $('.table__body');
const usersPerPage = 8;
let currentPage = 1;
let totalPages = Math.ceil(users.length / usersPerPage);

const paginationItems = $('.pagination__list-item');
const prev = $('.pagination__list-item_prev');
const next = $('.pagination__list-item_next');

function createMobileTableRow(user) {
  const userData = `
    <td>
      <p class="td-mob-title">Customer:<span> ${user.name}</span></p>
      <p class="td-mob-title">Company:<span> ${user.company}</span></p>
      <p class="td-mob-title">Phone Number:<span> ${user.phoneNumber}</span></p>
      <p class="td-mob-title">Email: <span> ${user.email}</span></p>
      <p class="td-mob-title">Country: <span> ${user.country}</span></p>
      <p class="td-mob-title">Status:<span> ${user.status}</span></p>
    </td>
  `;
  return $('<tr>').append(userData);
}

function createDesktopTableRow(user) {
  return $('<tr>').append(
    $('<td>').text(user.name),
    $('<td>').text(user.company),
    $('<td>').text(user.phoneNumber),
    $('<td>').text(user.email),
    $('<td>').text(user.country),
    $('<td>').append(
      $('<span>')
        .text(user.status)
        .addClass(`status status-${user.status.toLowerCase()}`)
    )
  );
}

function updateTable() {
  paginationItems.removeClass('pagination__list-item_active');
  $(`.pagination__list-item[data-page="${currentPage}"]`).addClass(
    'pagination__list-item_active'
  );

  const startIndex = (currentPage - 1) * usersPerPage;
  const displayedUsers = users.slice(startIndex, startIndex + usersPerPage);

  tableBody.empty();
  displayedUsers.forEach((user) => {
    if (window.innerWidth <= 900) {
      tableBody.append(createMobileTableRow(user));
    } else {
      tableBody.append(createDesktopTableRow(user));
    }
  });

  prev.prop('disabled', currentPage === 1);
  next.prop('disabled', currentPage === totalPages);
}

function handlePaginationClick() {
  const clickedPage = parseInt($(this).attr('data-page'));
  if (!isNaN(clickedPage)) {
    currentPage = clickedPage;
    updateTable();
  }
}

function handleNextPrevClick() {
  if (
    $(this).hasClass('pagination__list-item_next') &&
    currentPage < totalPages
  ) {
    currentPage++;
  } else if (
    $(this).hasClass('pagination__list-item_prev') &&
    currentPage > 1
  ) {
    currentPage--;
  }
  updateTable();
}

function handleResize() {
  updateTable();
}

updateTable();

$('.pagination__list').on(
  'click',
  '.pagination__list-item',
  handlePaginationClick
);
$('.pagination__list-item_next, .pagination__list-item_prev').on(
  'click',
  handleNextPrevClick
);

$('.burger').on('click', function () {
  $('.sidebar').fadeToggle('slow');
});

$(window).on('resize', handleResize);
