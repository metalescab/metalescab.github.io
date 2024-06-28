require 'unicode_utils'

module Jekyll
  module HighlightAuthor
    def highlight_author(input, authors_to_highlight)
      authors_to_highlight = authors_to_highlight.map { |author| normalize_name(author) }

      authors = input.split(", ")
      authors.map! do |author|
        if authors_to_highlight.include?(normalize_name(author))
          "<span class='highlight'>#{author}</span>"
        else
          author
        end
      end
      authors.join(", ")
    end

    private

    def normalize_name(name)
      UnicodeUtils.nfkd(name).gsub(/\p{Mn}/, '').downcase.strip
    end
  end
end

Liquid::Template.register_filter(Jekyll::HighlightAuthor)
