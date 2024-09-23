const requestData = [
    {
        cccd: "01234567890",
        name: "Nguyễn Văn A",
        relationship: "Cha",
        childName: "Nguyễn Văn B",
        dob: "12/01/2024",
        birthPlace: "Phường Cầu Diễn, Quận Nam Từ Liêm, Hà Nội",
        gender: "Nam",
        note: "Không có"
    },
    {
        cccd: "09876543210",
        name: "Lê Thị C",
        relationship: "Mẹ",
        childName: "Lê Văn D",
        dob: "15/02/2023",
        birthPlace: "Phường Thanh Xuân Bắc, Quận Thanh Xuân, Hà Nội",
        gender: "Nam",
        note: "Yêu cầu cấp lại do sai thông tin"
    },
    {
        cccd: "12345678901",
        name: "Phạm Thị E",
        relationship: "Mẹ",
        childName: "Phạm Thị F",
        dob: "03/07/2024",
        birthPlace: "Phường Giảng Võ, Quận Ba Đình, Hà Nội",
        gender: "Nữ",
        note: "Giấy khai sinh bị hỏng"
    },
    {
        cccd: "23456789012",
        name: "Trần Văn G",
        relationship: "Cha",
        childName: "Trần Văn H",
        dob: "09/09/2024",
        birthPlace: "Phường Mai Dịch, Quận Cầu Giấy, Hà Nội",
        gender: "Nam",
        note: "Giấy khai sinh bị mất"
    },
    {
        cccd: "34567890123",
        name: "Đỗ Thị I",
        relationship: "Mẹ",
        childName: "Đỗ Thị K",
        dob: "01/11/2024",
        birthPlace: "Phường Mễ Trì, Quận Nam Từ Liêm, Hà Nội",
        gender: "Nữ",
        note: "Sai địa chỉ trên giấy khai sinh"
    },
    {
        cccd: "45678901234",
        name: "Nguyễn Minh L",
        relationship: "Cha",
        childName: "Nguyễn Minh M",
        dob: "25/05/2023",
        birthPlace: "Phường Hàng Bài, Quận Hoàn Kiếm, Hà Nội",
        gender: "Nam",
        note: "Không có"
    },
    {
        cccd: "56789012345",
        name: "Vũ Thị N",
        relationship: "Mẹ",
        childName: "Vũ Văn O",
        dob: "12/08/2023",
        birthPlace: "Phường Ngọc Khánh, Quận Ba Đình, Hà Nội",
        gender: "Nam",
        note: "Giấy khai sinh bị cháy"
    },
    {
        cccd: "67890123456",
        name: "Trần Văn P",
        relationship: "Cha",
        childName: "Trần Thị Q",
        dob: "22/10/2023",
        birthPlace: "Phường Yên Hòa, Quận Cầu Giấy, Hà Nội",
        gender: "Nữ",
        note: "Giấy khai sinh bị mờ"
    },
    {
        cccd: "78901234567",
        name: "Ngô Thị R",
        relationship: "Mẹ",
        childName: "Ngô Thị S",
        dob: "17/03/2024",
        birthPlace: "Phường Trung Tự, Quận Đống Đa, Hà Nội",
        gender: "Nữ",
        note: "Giấy khai sinh bị hỏng"
    },
    {
        cccd: "89012345678",
        name: "Hoàng Văn T",
        relationship: "Cha",
        childName: "Hoàng Văn U",
        dob: "29/12/2023",
        birthPlace: "Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội",
        gender: "Nam",
        note: "Sai thông tin ngày sinh"
    }
];

const tableBody = document.getElementById("data-table");
    requestData.forEach((request, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${request.cccd}</td>
            <td>
                ${request.dob}
            </td>
            <td>${request.note}</td>
             <td>
                <button class="btn-view" data-index="0">Xem yêu cầu</button>
                <button class="btn-approve">Duyệt</button>
                <button class="btn-reject">Hủy</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

const tableBody2 = document.getElementById("data-table1");
    requestData.forEach((request, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${request.cccd}</td>
            <td>
                ${request.dob}
            </td>
            <td>${request.note}</td>
                <td>
                <button class="btn-view" data-index="0">Xem yêu cầu</button>
                <button class="btn-approve">Duyệt</button>
                <button class="btn-reject">Hủy</button>
            </td>
        `;
        tableBody.appendChild(row);
});

function showRequestDetails(index) {
    const modal = document.getElementById("requestModal");
    const request = requestData[index];

    document.getElementById("cccd").innerText = request.cccd;
    document.getElementById("name").innerText = request.name;
    document.getElementById("relationship").innerText = request.relationship;
    document.getElementById("childName").innerText = request.childName;
    document.getElementById("dob").innerText = request.dob;
    document.getElementById("birthPlace").innerText = request.birthPlace;
    document.getElementById("gender").innerText = request.gender;
    document.getElementById("note").innerText = request.note;

    modal.style.display = "block";
}


const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    const modal = document.getElementById("requestModal");
    modal.style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("requestModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const viewButtons = document.querySelectorAll(".btn-view");
viewButtons.forEach((button, index) => {
    button.addEventListener("click", () => showRequestDetails(index));
});


function submitForm() {
    alert("Thông tin đã được cập nhật!");
}

function openModal() {
    document.getElementById("error-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("error-modal").style.display = "none";
}

function submitError() {
    const errorNote = document.getElementById("error-note").value;
    if (errorNote.trim() === "") {
        alert("Vui lòng điền ghi chú.");
        return;
    }
    alert("Báo cáo đã được gửi!");
    closeModal();
}



function openModal(cccd, name, reason) {
    document.getElementById("cccd").textContent = cccd;
    document.getElementById("name").textContent = name;
    document.getElementById("reason").textContent = reason;
    document.getElementById("requestModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("requestModal").style.display = "none";
}

