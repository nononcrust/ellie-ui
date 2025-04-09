"use client";

import { Button, Dialog } from "@ellie-ui/core";

export const Dialog4 = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outlined">스크롤</Button>
      </Dialog.Trigger>
      <Dialog.Content className="w-[640px]">
        <Dialog.Header>
          <Dialog.Title>이용약관</Dialog.Title>
          <Dialog.Description className="sr-only">이용약관</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <p className="text-sub whitespace-pre-wrap text-[15px]">{terms}</p>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outlined">취소</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button type="submit">동의합니다</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

const terms = `제 1 장 총칙

제 1조 (목적)

본 약관은 서비스(이하 "회사"라 한다)는 홈페이지에서 제공하는 서비스(이하 "서비스"라 한다)를 제공함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.

제 2조 (용어의 정의)

1. 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.

'서비스'란 회사가 이용자에게 서비스를 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 구성한 가상의 공간을 의미하며, 서비스 자체를 의미하기도 합니다.

'회원(이하 "회원"이라 한다)'이란 개인정보를 제공하여 회원등록을 한 자로서 홈페이지의 정보를 지속적으로 제공받으며 홈페이지가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.

'아이디(이하 "ID"라 한다)'란 회원의 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 회원 고유의 계정 정보를 의미합니다.

'비밀번호'란 회원이 부여 받은 ID와 일치된 회원임을 확인하고, 회원의 개인정보를 보호하기 위하여 회원이 정한 문자와 숫자의 조합을 의미합니다.

'회원탈퇴(이하 "탈퇴"라 한다)'란 회원이 이용계약을 해지하는 것을 의미합니다.

2. 본 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을 제외하고는 관계법령 및 서비스 별 안내에서 정하는 바에 의합니다.

제 3조 (이용약관의 효력 및 변경)

1. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 각 서비스 사이트의 초기 서비스화면에 게시합니다.

2. 회사는 약관의 규제에 관한 법률, 전자거래기본법, 전자 서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.

3. 회사는 본 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 회사가 제공하는 서비스 사이트의 초기 화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.

다만, 회원에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 회사는 개정 전 내용과 개정 후 내용을 명확하게 비교하여 회원이 알기 쉽도록 표시합니다.

4. 회원은 개정된 약관에 대해 거부할 권리가 있습니다. 회원은 개정된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 회원등록을 해지할 수 있습니다.

단, 개정된 약관의 효력 발생일 이후에도 서비스를 계속 이용할 경우에는 약관의 변경사항에 동의한 것으로 간주합니다.

5. 변경된 약관에 대한 정보를 알지 못해 발생하는 회원 피해는 회사가 책임지지 않습니다.

제 4조 (약관 외 준칙)

1. 본 약관은 회사가 제공하는 서비스에 관해 별도의 정책 및 운영규칙과 함께 적용됩니다.

2. 본 약관에 명시되지 아니한 사항과 본 약관의 해석에 관하여는 관계법령에 따릅니다.

제 2 장 이용약관 체결

제 5조 (이용계약의 성립)

1. 이용계약은 회원의 본 이용약관 내용에 대한 동의와 이용신청에 대하여 회사의 이용승낙으로 성립합니다.

2. 본 이용약관에 대한 동의는 회원등록 당시 본 약관을 읽고 "위 서비스 약관에 동의합니다"의 대화 창에 표시를 한 후 등록하기 단추를 누름으로써 의사표시를 한 것으로 간주합니다.

제 6조 (서비스 이용 신청)

1. 회원으로 가입하여 본 서비스를 이용하고자 하는 이용고객은 회사에서 요청하는 제반 정보(이름, 메일주소, 연락처, 주소 등)를 제공하여야 합니다.

2. 타인의 명의(이름 및 메일주소 등)를 도용하여 이용신청을 한 회원의 모든 ID는 삭제되며, 관계법령에 따라 처벌을 받을 수 있습니다.

3. 만 14세 미만의 아동이 회원으로 가입하기 위해서는 반드시 개인정보의 수집 및 이용목적에 대하여 충분히 숙지하고 법정대리인(부모)의 동의를 받아야 합니다.

법정대리인의 허락을 받지 않은 14세 미만의 아동에 대해서는 회원에서 제외할 수 있습니다.

제 7조 (개인정보의 보호 및 사용)

1. 회사는 관계법령이 정하는 바에 따라 회원등록정보를 포함한 회원의 개인정보를 보호하기 위해 노력합니다.

회원 개인 정보의 보호 및 사용에 대해서는 관련법령 및 회사의 개인정보보호정책이 적용됩니다.

단, 회사의 공식사이트 이외의 웹에서 링크된 사이트에서는 회사의 개인정보보호정책이 적용되지 않습니다.

또한 회사는 회원의 귀책사유로 인해 노출된 정보에 대해서 일체의 책임을 지지 않습니다.

2. 회사는 이용자에게 제공하는 서비스의 양적, 질적 향상을 위하여 이용자의 개인정보를 제휴사에게 제공, 공유할 수 있으며, 이 때에는 반드시 이용자의 동의를 받아 필요한 최소한의 정보를 제공, 공유하며 누구에게 어떤 목적으로 어떤 정보를 제공, 공유하는지 명시합니다.

3. 회원은 원하는 경우 언제든 회사에 제공한 개인정보의 수집과 이용에 대한 동의를 철회할 수 있으며, 동의의 철회는 구독해지 회원 탈퇴를 하는 것으로 이루어집니다.

4. 회사는 수탁자를 통해 개별 이벤트, 행사가 진행될 경우, 해당 이벤트 참여 신청 페이지를 통해 명시적으로 개인정보 취급위탁에 대한 회원 동의를 받도록 하겠습니다.

제 8조 (이용신청의 승낙과 제한)

1. 회사는 제 6조의 규정에 의거 이용신청고객에 대하여 업무 수행상 또는 기술상 지장이 없는 경우에 원칙적으로 접수순서에 따라 서비스 이용을 승낙합니다.

2. 회사는 다음 각 호의 내용에 해당하는 경우 이용신청에 대한 승낙을 제한할 수 있고, 그 사유가 해소 될 때까지 승낙을 유보할 수 있습니다.

i.회사의 서비스 관련 설비에 여유가 없는 경우

ii.회사의 기술상 지장이 있는 경우

iii.기타 회사의 사정상 필요하다고 인정되는 경우

3. 회사는 다음 각 호의 내용에 해당하는 경우 이용신청에 대한 승낙을 하지 아니할 수도 있습니다.

i.실명이 아니거나 타인의 명의를 이용하여 신청한 경우

ii.이용계약 신청서의 내용을 허위로 기재한 경우

iii.사회의 안녕과 질서, 미풍양속을 저해할 목적으로 신청한 경우

iv.부정한 용도로 본 서비스를 이용하고자 하는 경우

v.영리를 추구할 목적으로 본 서비스를 이용하고자 하는 경우

vi.기타 회사가 정한 등록신청 요건이 미비된 경우

vii.본 서비스와 경쟁관계가 있는 이용자가 신청하는 경우

viii.기타 규정한 제반 사항을 위반하며 신청하는 경우

4. 회사는 이용신청고객이 관계법령에서 규정하는 미성년자일 경우에 서비스 별 안내에서 정하는 바에 따라 승낙을 보류할 수 있습니다.

제 9조 (회원 아이디 부여 및 변경 등)

1. 회사는 회원에 대하여 본 약관에 정하는 바에 따라 회원 ID를 부여합니다.

2. 회원이 원할 경우 회원 ID는 변경이 가능하며, 이 때 새로운 회원 ID는 다른 회원의 ID와 중복되지 않아야 합니다.

3. 회원은 해당 홈페이지로 링크된 메뉴를 통하여 자신의 개인정보를 관리할 수 있는 페이지를 열람할 수 있으며, 해당 페이지에서 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.

4. 회사가 제공하는 서비스의 회원 ID는 회원 본인의 동의 하에 회사가 운영하는 자사 사이트의 회원 ID와 연결될 수 있습니다.

5. 회원 ID는 다음 각 호에 해당하는 경우에 회원 또는 회사의 요청으로 변경할 수 있습니다.

i.회원 ID가 회원의 전화번호 또는 주민등록번호 등으로 등록되어 사생활 침해가 우려되는 경우

ii.타인에게 혐오감을 주거나 미풍양속에 어긋나는 경우

iii.기타 합리적인 사유가 있는 경우

6. 회원 ID 및 비밀번호의 관리책임은 회원에게 있습니다. 이를 소홀이 관리하여 발생하는 서비스 이용상의 손해 또는 제3자에 의한 부정이용 등에 대한 책임은 회원에게 있으며 회사는 그에 대한 책임을 일절 지지 않습니다.

7. 기타 회원개인정보 관리 및 변경에 관한 사항은 서비스 별 안내에 정하는 바에 의합니다.
`;
