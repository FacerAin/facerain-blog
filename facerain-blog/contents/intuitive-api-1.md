---
date: "2022-03-27"
title: "[웹 API 디자인] 직관적인 표현 사용하기"
categories: ["Tip", "Development", "Web"]
summary: "직관적인 표현을 사용하여 좋은 API를 디자인해봅시다."
thumbnail: "./intuitive-api-1/th.jpg"
---

> [웹 API 디자인 - 아노드 로렛](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788931463224)의 내용을 정리한 글입니다.

## 직관적인 API 디자인하기

사용하기 어려운 API를 쓰고 싶은 사람이 있을까요? 아마도 이 세상에 그런 사람은 없을겁니다.
**사람들은 누구나 사용하기 쉬운 직관적인 API를 기대합니다.** 직관적인 API를 만들기 위해서는 아래 3가지 요소가 필요합니다.

1. **직관적인 표현**
2. 직관적인 상호작용
3. 직관적인 흐름

이번 시간에는 **직관적인 표현을 사용하여 API 디자인**하는 방법을 알아봅시다.

## 직관적인 표현 사용하기

좋은 API의 기본은 **사용자의 관점에서 디자인하는 것**입니다. 즉, 사용자가 이해하기 쉽고, 사용하기 쉬운 API를 디자인하여야 합니다.  
이에 모호하고 직관적이지 않은 표현으로 이루어진 API는 사용자가 API를 이해하고 사용하기 어렵게 만듭니다. 따라서 **API를 디자인할 때는 직관적인 표현을 사용하여야 합니다.**  
직관적인 표현을 사용하기 위한 아래 3가지 요소를 차례대로 살펴봅시다.

- 명확한 이름 사용하기
- 사용하기 쉬운 데이터 타입과 포맷 정하기
- 바로 사용할 수 있는 데이터 선택하기

### 명확한 이름 사용하기

가상 은행 API를 사용한다고 가정해봅시다.
API에는 초과 인출 제한을 위한 **bkAccOverProtFtActBln**라는 속성이 있습니다. 이 속성은 Boolean 데이터로 초과 인출을 허용할지 안할지 결정합니다.

```
Account:
  properties:
    bkAccOverProtFtActBln
      type: boolean
      description: |
        overdraft protection
        feature status
```

하지만 bkAccOverProtFtActBln라는 이름을 딱 들었을 때 어떤 기능을 하는지 쉽게 유추할 수 있나요? 추가 설명 없이는 **해당 속성의 기능을 쉽게 이해할 수 없었을 것입니다.**

해당 속성의 이름을 직관적인 표현으로 함께 바꿔보겠습니다.

- **약어의 사용은 피하자**
  bkAccOverProtFtActBln을 보면 대부분 약어로 이루어져 있습니다. 약어는 사용자 입장에서 이해하기 어려운 경우가 많습니다. **따라서 되도록 약어의 사용은 피하도록 합니다.**
  물론 max, min, num과 같이 일상적으로 자주 사용하는 약어의 경우에는 괜찮습니다!
  한번 약어를 덜어내보면, bankAccountOverdraftProtectionFeatureActiveBoolean로 바꿀 수 있습니다.

- **유용하지 않은 정보는 제거하자**
  약어를 덜어내니 보다 속성의 기능을 이해하기는 수월해졌습니다. **하지만 아직 이름이 너무 길고, 복잡합니다.**

이름의 접미사로 사용된 Boolean에 주목해봅시다. 해당 속성의 타입이 Boolean임은 API 문서를 통해 충분히 알 수 있습니다. 그렇다면 굳이 속성의 이름에 타입을 명시해줄 필요가 있을까요?
설령 API 문서가 없더라도 개발자 입장에서 해당 속성의 값이 true 혹은 false라면 Boolean 타입임은 쉽게 유추할 수 있습니다.  
이처럼 **API 문서로 충분히 알아낼 수 있는 정보는 굳이 속성의 이름에 들어갈 필요가 없습니다.**

마찬가지로 Feauture와 Active도 해당 속성을 이해하는데 **크게 유용한 정보를 지니고 있지는 않습니다.** 이들도 함께 제거합니다.

또한 해당 속성이 은행 계좌(Bank Account)에 종속되는 것은 당연합니다. 따라서 bankAccount 단어도 제거합니다.

> (Tip) 이름을 정할 때는 (그 목적이 무엇이건) 세 단어에서 두 단어의 조합까지만 하기를 권합니다.

최종 결과는 아래와 같습니다.

**OverdraftProtection**

**속성 이름만 보더라도 누구나 한눈에 쉽게 이해할 수 있습니다.**

약어를 제거하고, 유용한 정보만 남겼더니 이름이 훨씬 깔끔하고 이해하기 쉬워졌습니다.
이처럼 **API를 디자인할 때는 한눈에 이해할 수 있는 직관적이고 간단한 이름을 사용하여야 합니다.**

### 사용하기 쉬운 데이터 타입과 포맷 정하기

**API가 사용하는 원시 데이터(raw data)는 개발자들이 명확히 이해할 수 있어야합니다.**

가상 은행 API에서 사용하는 계좌 데이터를 가정해보겠습니다.

```json
{
    "number": 123456,
    "balanceDate": 1534960860,
    "creationDate": 1423267200,
    "type": 1,
    ...
}
```

우선 balanceDate와 creationDate를 살펴봅시다.
이들을 살펴보면 날짜를 의미한다는 것은 알겠는데, 1534960860와 1423267200라는 값은 무엇을 의미할까요?  
해당 값이 UNIX 타임스탬프라는 것을 눈치챌 수 있는 개발자는 얼마 없을 것입니다. 누구나 이해할 수 있는 ISO 8601 문자열로 변환하면 아래와 같습니다.
이를 통해 Date가 어떤 값인지 누구나 쉽게 이해할 수 있습니다.

```json
{
    "number": 123456,
    "balanceDate": 2018-08-22,
    "creationDate": 2015-02-07,
    "type": 1,
    ...
}
```

다음으로는 Type을 살펴봅시다. 1이 의미하는 것은 무엇일까요? 사실 type 속성은 당좌(checking) 예금 계좌인지, 저축 (saving) 예금 계좌인지 구별 짓는 속성입니다. 하지만 사용자 입장에서 1이라는 숫자 코드가 무엇을 의미하는지 이해하기 쉽지 않습니다. 이처럼 API를 디자인할 때는 **단순히 읽기만 해도 이해할 수 있는 데이터 포맷이나 타입을 사용**하도록 합시다.
고친 결과는 아래와 같습니다.

```json
{
    "number": 123456,
    "balanceDate": 2018-08-22,
    "creationDate": 2015-02-07,
    "type": "checking",
    ...
}
```

### 바로 사용할 수 있는 데이터 선택하기

**API를 디자인할 때 반드시 연관성이 있고 도움이 되는 데이터를 제공하여야 합니다.**
아래는 계좌 송금을 담당하는 API입니다.

```json
{
  "source": "9asd87qwe-q8wd-2sd4-6sd2",
  "destination": "9grq81qsd-8wd2-x25a-23sd",
  "amount": 555
}
```

위 API를 살짝 수정해보겠습니다. 결과는 아래와 같습니다.

```json
{
  "source": "123456-789456",
  "destination": "456789-123465",
  "amount": 555,
  "currency": "USD"
}
```

기존에서 두 가지 부분이 바뀌었습니다. 차례대로 살펴봅시다.

- Source와 Destination
  기존 API에서 source와 destination은 UUID(Universal Unique Identifier) 값을 가졌습니다. 하지만 사용자가 UUID를 보고 어떤 계좌인지 바로 알 수 있을까요?
  해당 계좌를 알기 위해서 UUID를 통해 계좌를 한번 더 조회하여야 합니다. 이보다는 **사용자에게 친화적인 은행 계좌번호를 사용하는 편이 좋을 수도 있습니다.**

- Currency
  Amount는 송금할 금액을 의미합니다. 하지만 해당 API 데이터만 보면 555원일지 555달러일지 모호하지 않을까요?
  따라서 currency 속성에 USD임을 명시해주었습니다. **이를 통해 사용자들은 별다른 추측이나 부수적인 작업을 하지 않아도 됩니다.**

이처럼 API를 디자인할 때는 **사용자가 바로 사용할 수 있는 데이터인지 확인하여야 합니다.**  
사용자가 바로 사용할 수 없는 데이터라면 부수적인 작업과 추측을 유발하고, 이는 API에 대한 오해와 오용을 야기하게 됩니다.

## 요약

이번 시간에는 **직관적인 표현을 사용하여 API 디자인**하는 방법을 알아보았습니다.
이를 위해서 아래 3가지 요소가 필요했습니다.

- 명확한 이름 사용하기
- 사용하기 쉬운 데이터 타입과 포맷 정하기
- 바로 사용할 수 있는 데이터 선택하기

API를 디자인하며 명심할 것은 바로 **사용자 중심의 API를 디자인**하는 것입니다. 사용자 입장에서 읽기 쉽고, 이해하기 쉬워야 한다는 사실을 잊지 마시길 바랍니다.
다음 시간에는 **직관적인 상호작용**이 가능한 API를 디자인하는 방법에 대해 알아보겠습니다. 감사합니다 :)

## Reference

> [웹 API 디자인 - 아노드 로렛](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788931463224)의 내용을 정리한 글입니다.