#!/usr/bin/env bash

toc_out="      <p id=\"toc\" class=\"[ toc ]\">\n"
toc_placeholder='<toc-out-placeholder>'
bm_out="${bm_out}${toc_placeholder}\n"
last_category=""
blocks_path="./src/blocks"

while IFS="|" read -r __category __title __url; do
  category="${__category:-Unknown}"
  title="${__title:-${__url}}"
  url="${__url}"
  id=$(tr '[:upper:]' '[:lower:]' <<< "${category}")
  id=${id//[ :\/]/-}

  if [[ -z "${url}" ]]; then
    continue
  fi

  if [[ "${category}" != "${last_category}" ]]; then
    if [[ -n "${last_category}" ]]; then
      bm_out="${bm_out}      </ul>\n"
      bm_out="${bm_out}      <!-- block-start: back-to-top -->\n"
      bm_out="${bm_out}      <!-- block-end: back-to-top -->\n\n"
    fi
    bm_out="${bm_out}      <h2 id=\"${id}\"><a href=\"#${id}\">${category}</a></h2>\n"
    bm_out="${bm_out}      <ul>\n"


    if [[ -n "${last_category}" ]]; then
        toc_out="${toc_out}        • "
    else
        toc_out="${toc_out}        "
    fi
    toc_out="${toc_out}<a href=\"#${id}\" id=\"toc-${id}\">${category}</a>\n"

    last_category="${category}"
  fi

  bm_out="${bm_out}        <li><a href=\"${url}\" target=\"_blank\" data-anchor=\"none\">${title}</a></li>\n"
done < <(bm view)

toc_out="${toc_out}      </p>\n"

bm_out="${bm_out}      </ul>\n"
bm_out="${bm_out}      <!-- block-start: back-to-top -->\n"
bm_out="${bm_out}      <!-- block-end: back-to-top -->\n"

bm_out="${bm_out/${toc_placeholder}/${toc_out}}"

printf "%b" "${bm_out}" > "${blocks_path}/bookmarks.html"
